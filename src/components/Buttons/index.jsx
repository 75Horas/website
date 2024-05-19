import { Body_ContactButton, Body_PreOrderButton, Body_StoreButton, Body_TwitterButton, DefaultButton } from "./index.styled";
import { FaDiscord } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { handleOpenWebsite } from "../../js/handles";

export function StyledButton({ title, ...rest }) {
    return (
        <DefaultButton {...rest} >
            <FaDiscord
                size={"32px"}
                className="icon"
            />
            <h1>{title}</h1>
        </DefaultButton>
    )
}

export function TiwitterButton({ ...rest }) {
    return (
        <Body_TwitterButton  {...rest}>
            <FaXTwitter
                size={"24px"}
                className="twitter-icon"
                onClick={() => { handleOpenWebsite("twitter") }}
            />
        </Body_TwitterButton>
    )
}

export function PreOrderButton({ title, subTitle }) {
    return (
        <Body_PreOrderButton>
            <div className="reflection">
                <div className="reflection01" />
                <div className="reflection02" />
                <div className="reflection03" />
            </div>
            <h1 className="title">{title}</h1>
            {subTitle ? (<p className="subTitle">{subTitle}</p>) : <></>}
        </Body_PreOrderButton>
    );
}

export function StoreButton({ title }) {
    return (
        <Body_StoreButton>
            <h1 className="title">{title}</h1>
        </Body_StoreButton>
    );
}

export function ContactButton({ title }) {
    return (
        <Body_ContactButton>
            <h1 className="title">{title}</h1>
        </Body_ContactButton>
    );
}