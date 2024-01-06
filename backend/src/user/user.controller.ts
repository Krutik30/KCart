import { USER_REPOSITORY } from '../core/constant';
import { User } from './user.entity';

export const userController = [
    {
        provide: USER_REPOSITORY,
        useValue: User,
    },
];