import xs, { Stream } from 'xstream';
import { run } from '@cycle/run';
import { h, VNode, makeDOMDriver } from '@cycle/dom';
import Item from './Item';
import List from './List';
import { DOMSource } from '@cycle/dom';
import customElementify from 'cycle-custom-elementify';

interface MainSources {
  DOM: DOMSource;
}

type MainSinks = {
  DOM: Stream<VNode>;
}

function main(sources: MainSources): MainSinks {
  return List(sources);
}

window.addEventListener('WebComponentsReady', () => {
  (document as any).customeElement.define('many-item', { is: customElementify(Item as any) });
  run(main, {
    DOM: makeDOMDriver('#main-container')
  });
});
