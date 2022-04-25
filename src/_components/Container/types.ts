import { IHeader } from './Header/types';
import { IFooter } from './Footer/types';
import { ReactElement } from "react";

export interface IContainer {
    children: ReactElement<any, any>
    footerProps: IFooter,
    headerProps: IHeader
}