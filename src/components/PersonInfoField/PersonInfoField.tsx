interface IPersonInfoField {
    title: string;
    description: string | undefined;
    optionalDescription?: string | undefined;
}

export const PersonInfoField = (props: IPersonInfoField) => {
    return (
        <div>
            {props.title}
            <b>
                {props.description} {props.optionalDescription}
            </b>
        </div>
    );
};
