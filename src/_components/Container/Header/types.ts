export interface IHeader{
    default?: boolean,
    searchBar?: ISearchBar
}

export interface IHeaderNewPublication {
    onPressCancel: () => void
    onPressContinue: () => void
    ContiueEnabled: boolean
}

export interface ISearchBar{
    value: string,
    onChange: (value: string) => void
}