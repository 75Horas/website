import { Body_Twitter } from "./index.style";
import { TiwitterButton } from "../Buttons";
import { Timeline } from "react-twitter-widgets";
import { useTranslation } from "react-i18next";


export function Twitter() {
    const { t } = useTranslation();
    return (
        <Body_Twitter>
            <div className="twitter-header">
                <div className="twitter-tag">{t('news.twitter_broadcast')}</div>
                <TiwitterButton className="twitter-icon" />
            </div>
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    // screenName: 'elonmusk'
                    screenName: '75Horas_4500'
                }}
                options={{
                    height: '600',
                    theme: "dark",
                    chrome: "noheader, nofooter",
                }}
            />
        </Body_Twitter >
    );
}