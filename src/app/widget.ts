import {IUserFixture} from './iuser-fixture';
import {IWidgetFixture} from './iwidget-fixture';

export class Widget {
  static MY_ID = 5;

  constructor(public title: string,
              public creator: string,
              public favorite: boolean,
              public channels: IUserFixture[],
              public trackedBy: IUserFixture[]) {}

  private static randomIntRange(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private static createRandomArray<T>(arr: T[], elementsCount: number): T[] {
    return [...arr]
      .sort(() => Math.random() - 0.5)
      .slice(0, elementsCount);
  }

  static generateRandomly(widgetFixture: IWidgetFixture, usersFixture: IUserFixture[]): Widget {
    const channelsCount = Widget.randomIntRange(1, usersFixture.length);
    const usersCount = Widget.randomIntRange(1, usersFixture.length);
    const lastUser = usersFixture[usersCount - 1];

    return new Widget(
      widgetFixture.title,
      lastUser.id === Widget.MY_ID ? 'Вы' : lastUser.name,
      Boolean(Math.round(Math.random())),
      Widget.createRandomArray(usersFixture, channelsCount),
      Widget.createRandomArray(usersFixture, usersCount)
    );
  }


}
