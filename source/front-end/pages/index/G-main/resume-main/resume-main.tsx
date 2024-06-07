// resume-main.tsx
import $ from 'jquery';
import React from 'react';
import MainHome from './MainHome';
import MainSkills from './MainSkills';
import MainContact from './MainContact';
function resumeMain(pageName: string | any, blockName: string | any) {
  const page = pageName;
  const block = blockName;
  console.log('//--|🠊 resume-main.tsx loaded 🠈|--//');

  return (
    <>
      <article className="scalable-main">
        <MainHome />
        <MainSkills />
        <MainContact />
      </article>
    </>
  );
}
export default resumeMain;

$(function () {
  //--|🠋 Developer 🠋|--//
  const devDetails: string = '#developing-skills details';
  const devFigure: string = '#developing-skills menu figure';
  const devCarousel: string = '#developing-skills .developing-carousel article';
  const devLeftSelector: string = '#developing-skills .developing-navigation button[class*="left"] img';
  const devRightSelector: string = '#developing-skills .developing-navigation button[class*="right"] img';

  //--|🠋 Producer 🠋|--//
  const proDetails: string = '#producing-skills details';
  const proFigure: string = '#producing-skills menu figure';
  const proCarousel: string = '#producing-skills .producing-carousel article';
  const proLeftSelector: string = '#producing-skills .producing-navigation button[class*="left"] img';
  const proRightSelector: string = '#producing-skills .producing-navigation button[class*="right"] img';

  //--|🠋 Common Variables 🠋|--//
  let devIndex = 0;
  let proIndex = 0;
  let $devArticle = $(devCarousel);
  let $proArticle = $(proCarousel);
  let devArticles = $devArticle.length;
  let proArticles = $proArticle.length;
  let devWidth = $devArticle.first().width() || 0;
  let proWidth = $proArticle.first().width() || 0;

  //--|🠋 Developer Events 🠋|--//
  $(devFigure).on('click', () => {
    $('#producing-skills').css('zIndex', '-1');
    $(devFigure).css('display', 'none');
    $('#developing-skills').toggleClass('collapsed expanded');
  });
  $(devDetails).on('click', () => {
    $('#producing-skills').css('zIndex', '');
    $(devFigure).css('display', 'flex');
    $('#developing-skills').toggleClass('expanded collapsed');
  });

  //--|🠋 Producer Events 🠋|--//
  $(proFigure).on('click', () => {
    $(proFigure).css('display', 'none');
    $('#developing-skills').css('zIndex', '-1');
    $('#producing-skills').toggleClass('collapsed expanded');
  });
  $(proDetails).on('click', () => {
    $(proFigure).css('display', 'flex');
    $('#developing-skills').css('zIndex', '');
    $('#producing-skills').toggleClass('expanded collapsed');
  });

  //--|🠋 Developer Navigation 🠋|--//
  const developerNavigation = (newIndex: number) => {
    const direction = newIndex > devIndex ? '+=' : '-=';
    $devArticle.animate({ right: `${direction}${devWidth}px` }, 500);
    devIndex = newIndex;
    updateMenu(devIndex, $devArticle);
    updateNavigation();
  };
  //--|🠋 Producer Navigation 🠋|--//
  const producerNavigation = (newIndex: number) => {
    const direction = newIndex > proIndex ? '+=' : '-=';
    $proArticle.animate({ right: `${direction}${proWidth}px` }, 500);
    proIndex = newIndex;
    updateMenu(proIndex, $proArticle);
    updateNavigation();
  };
  //--|🠋 Update Navigation 🠋|--//
  const updateNavigation = () => {
    // Developer navigation
    $developerLeftButton.toggleClass('disabled', devIndex === 0).toggleClass('enabled', devIndex > 0);
    $developerRightButton
      .toggleClass('disabled', devIndex === devArticles - 1)
      .toggleClass('enabled', devIndex < devArticles - 1);

    // Producer navigation
    $producerLeftButton.toggleClass('disabled', proIndex === 0).toggleClass('enabled', proIndex > 0);
    $producerRightButton
      .toggleClass('disabled', proIndex === proArticles - 1)
      .toggleClass('enabled', proIndex < proArticles - 1);
  };
  //--|🠋 Update Menu 🠋|--//
  const updateMenu = (newIndex: number, $article: JQuery<HTMLElement>) => {
    $article.removeClass('visible hidden').each(function (index) {
      $(this)
        .toggleClass('visible', index === newIndex)
        .toggleClass('hidden', index !== newIndex);
    });
  };

  //--|🠋 Developer Navigation Buttons 🠋|--//
  let $developerLeftButton = $(devLeftSelector).parent();
  let $developerRightButton = $(devRightSelector).parent();
  $developerRightButton.on('click', () => {
    if (devIndex < devArticles - 1) developerNavigation(devIndex + 1);
  });
  $developerLeftButton.on('click', () => {
    if (devIndex > 0) developerNavigation(devIndex - 1);
  });
  //--|🠋 Producer Navigation Buttons 🠋|--//
  let $producerLeftButton = $(proLeftSelector).parent();
  let $producerRightButton = $(proRightSelector).parent();
  $producerRightButton.on('click', () => {
    if (proIndex < proArticles - 1) producerNavigation(proIndex + 1);
  });
  $producerLeftButton.on('click', () => {
    if (proIndex > 0) producerNavigation(proIndex - 1);
  });
  //--|🠋 Initial update 🠋|--//
  updateNavigation();
  updateMenu(devIndex, $devArticle);
  updateMenu(proIndex, $proArticle);
});
