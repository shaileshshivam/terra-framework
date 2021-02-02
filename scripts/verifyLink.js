/* eslint-disable no-param-reassign */
const fs = require('fs');
const path = require('path');
const { XMLHttpRequest } = require('xmlhttprequest');
const packagePaths = require('./common/getPackagePaths');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    if (file !== 'node_modules') {
      if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
        arrayOfFiles = getAllFiles(`${dirPath}/${file}`, arrayOfFiles);
      } else if (file.endsWith('.mdx')) {
        arrayOfFiles.push(path.join(dirPath, '/', file));
      }
    }
  });

  return arrayOfFiles;
}

let links = [];

packagePaths.forEach((packagePath) => {
  // const dirPath = path.resolve(packagePath);
  const arrayOfFiles = getAllFiles(packagePath, []);
  arrayOfFiles.forEach(filePath => {
    const tempLinks = [];
    // console.log(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
    tempLinks.push(fileContent.match(/\[(.*?)\]\((.*?)\)/g));
    tempLinks.forEach(tempLink => {
      if (tempLink !== null) {
        tempLink = tempLink.toString();
        links.push(tempLink.match(/\((.*?)\)/g));
      }
    });
  });
});
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

links = links.toString();
links = links.replace(/\(/g, '');
links = links.replace(/\)/g, '');
links = links.split(',');
links = links.filter(onlyUnique);
// console.log(links);

const xmlHttp = new XMLHttpRequest();
links.forEach(link => {
  if (!link.includes('component-standards')) {
    xmlHttp.onloadend = () => {
      if (xmlHttp.status === 404) {
        console.warn('Following link is broken: ', link, this.readyState);
      } else {
        console.warn(xmlHttp.status, link, xmlHttp.readyState);
      }
    };
    xmlHttp.open('GET', link, true);
    xmlHttp.send(null);
  }
});
