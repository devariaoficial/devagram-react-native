export interface IHeader{
    default?: boolean,
    searchBar?: ISearchBar,
    profileHeader?: IProfileHeader,
    editProfileHeader? : IEditProfileHeader
}

export interface ISearchBar{
    value: string,
    onChange: (value: string) => void
}

export interface IProfileHeader{
    userName: string,
    isExternalProfile: boolean
}

export interface IEditProfileHeader {
    submit: () => void
}