import { Request, Response } from 'express';
import SectionHeading from '../models/sectionHeading.model.js';

export const sectionHeadingList = async (req: Request, res: Response) => {
    try {
        const headings = await SectionHeading.find();
        return res.status(200).json(headings);
    } catch (error: any) {
        console.error('Error in sectionHeadingList:', error);
        return res.status(500).json({ message: 'Something went wrong listing section headings', error: error.message });
    }
};

export const sectionHeadingGetByKey = async (req: Request, res: Response) => {
    try {
        const { sectionKey } = req.params;
        const heading = await SectionHeading.findOne({ sectionKey });
        if (!heading) {
            return res.status(404).json({ message: 'Section heading not found' });
        }
        return res.status(200).json(heading);
    } catch (error: any) {
        console.error('Error in sectionHeadingGetByKey:', error);
        return res.status(500).json({ message: 'Something went wrong fetching section heading', error: error.message });
    }
};

export const sectionHeadingUpsert = async (req: Request, res: Response) => {
    try {
        const { sectionKey, mainHeading, subHeading } = req.body;

        if (!sectionKey || !mainHeading || !subHeading) {
            return res.status(400).json({ message: 'sectionKey, mainHeading, and subHeading are required' });
        }

        const heading = await SectionHeading.findOneAndUpdate(
            { sectionKey },
            { mainHeading, subHeading },
            { new: true, upsert: true }
        );

        return res.status(200).json(heading);
    } catch (error: any) {
        console.error('Error in sectionHeadingUpsert:', error);
        return res.status(500).json({ message: 'Something went wrong upserting section heading', error: error.message });
    }
};
