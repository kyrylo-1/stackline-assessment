import apiData from '../assets/Webdev_data2.json';
import { ISales } from '../store/reducers';

export const fetchData = (): Promise<ISales[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve((apiData[0].sales as unknown) as ISales[]), 600);
  });
