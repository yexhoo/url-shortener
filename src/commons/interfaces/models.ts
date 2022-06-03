import { Model } from 'sequelize/dist';

interface IBaseModel extends Model{
    id: string,
    createdAt?: Date,
    updatedAt?: Date
}

interface IShortcode extends IBaseModel{
    code: string,
    url: string,
}

export{ IShortcode, IBaseModel }