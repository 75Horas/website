import { Body_Twitter } from "./index.style";
import { TiwitterButton } from "../Buttons";
import { useTranslation } from "react-i18next";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export function Twitter() {
    const { t } = useTranslation();
    return (
        <Body_Twitter>
            <div className="twitter-header">
                <div className="twitter-tag">{t('news.twitter_broadcast')}</div>
                <TiwitterButton className="twitter-icon" />
            </div>
            {/* <div>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName='75Horas_4500'
                    theme="dark"
                    noFooter
                    noHeader
                    noBorders
                    noScrollbar
                    autoHeight
                />
            </div> */}
        </Body_Twitter >
    );
}