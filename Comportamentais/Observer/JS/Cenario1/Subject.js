import Observer from './Observer';

export default class Subject {
  observer = new Observer();

  registerObserver(observer) {}

  removeObserver(observer) {}

  notifyObservers() {}
}
