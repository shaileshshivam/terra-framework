/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const fs = require('fs');
const path = require('path');
const { XMLHttpRequest } = require('xmlhttprequest');
const packagePaths = require('./common/getPackagePaths');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    if (file !== 'node_modules' && file !== 'lib') {
      if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
        arrayOfFiles = getAllFiles(`${dirPath}/${file}`, arrayOfFiles);
      } else
      if (file.endsWith('.mdx')) {
        arrayOfFiles.push(path.join(dirPath, '/', file));
      }
    }
  });

  return arrayOfFiles;
}

function getFileLinks(fileLinks) {
  packagePaths.forEach((packagePath) => {
    const arrayOfFiles = getAllFiles(packagePath, []);
    arrayOfFiles.forEach(filePath => {
      const tempLinks = [];
      const fileContent = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
      tempLinks.push(fileContent.match(/\[(.*?)\]\((.*?)\)/g));
      tempLinks.forEach(tempLink => {
        if (tempLink !== null) {
          tempLink = tempLink.toString();
          tempLink = tempLink.match(/\]\((.*?)\)/g);
          tempLink = tempLink.toString();
          tempLink = tempLink.replace(/\]/g, '');
          tempLink = tempLink.replace(/\(/g, '');
          tempLink = tempLink.replace(/\)/g, '');
          tempLink = tempLink.split(',');
          fileLinks[filePath] = tempLink;

          tempLink.forEach(link => {
            const index = fileContent.indexOf(link);
            const tempString = fileContent.substring(0, index);
            const lineNumber = tempString.split('\n').length;

            fileLinks[filePath][link] = lineNumber;
          });
        }
      });
    });
  });
  return fileLinks;
}

function checkLinks(fileLinks) {
  Object.entries(fileLinks).forEach(fileLink => {
    const [file, links] = fileLink;
    links.forEach(link => {
      const xmlHttp = new XMLHttpRequest();
      xmlHttp.open('GET', link);
      xmlHttp.send(null);
      xmlHttp.onloadend = () => {
        if (xmlHttp.status === 404 && xmlHttp.responseText.includes('404 Not Found')) {
          console.log('Following link is broken "', link, '" in file "', file, '" at', 'line: ', fileLinks[file][link]);
        }
        xmlHttp.abort();
      };
    });
  });
}

const fileLinks = getFileLinks({});

checkLinks(fileLinks);

setTimeout(() => process.exit(), 100);
