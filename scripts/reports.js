const reports = document.querySelector('.report-stats');

let reportTarget, iconSrc, reportIcon;

reports.addEventListener('mouseover', e => {
  if (e.target.classList[0] != 'report-stats') {
    reportTarget = getParentLink(e.target);
  }
  if (reportTarget) {
    reportIcon = reportTarget.children[0].children[0];
    iconSrc = getIconName(reportIcon.src);
    reportIcon.src = `./assets/icons/${getDarkIconName(iconSrc)}`;
  }
});

reports.addEventListener('mouseout', e => {
  if (reportTarget) {
    reportIcon.src = `./assets/icons/${iconSrc}`;
    iconSrc = '';
  }
})

const getParentLink = e => {
  if (e.parentElement) {
    const nodeName = e.parentElement.nodeName;
    if (nodeName == 'A') {
      return e.parentNode;
    } else {
      return getParentLink(e.parentNode);
    }
  }
}

const getIconName = str => {
  return str.split('/')[str.split('/').length - 1];
}

const getDarkIconName = str => {
  return str.split('.')[0] + '-white.svg';
}