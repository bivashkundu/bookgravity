import axiosInstance from '../axiosInstance';
import { endpoints } from '../endpoints';

export interface TSectionHeading {
  _id?: string;
  sectionKey: string;
  mainHeading: string;
  subHeading: string;
}

export async function getSectionHeading(sectionKey: string): Promise<TSectionHeading> {
  try {
    const res = await axiosInstance.get(
      endpoints.sectionHeading.getByKey.replace(':sectionKey', sectionKey)
    );
    return res.data;
  } catch (error) {
    console.error('Error in getSectionHeading:', error);
    throw error;
  }
}

export async function upsertSectionHeading(
  data: Pick<TSectionHeading, 'sectionKey' | 'mainHeading' | 'subHeading'>
): Promise<TSectionHeading> {
  try {
    const res = await axiosInstance.post(endpoints.sectionHeading.upsert, data);
    return res.data;
  } catch (error) {
    console.error('Error in upsertSectionHeading:', error);
    throw error;
  }
}
