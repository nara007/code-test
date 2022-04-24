import styled from 'styled-components';
import Box from '@mui/material/Box';

const Container = styled.div`
    margin-top: 3rem;
    color: #008ec4;
    font-size: .9rem;
    border-top: 1px solid #F5F5F5;
`;
const footStr = 'Butikkene.no | Real Time Communications World | MiniTool | Y-106FM | Pillar Wealth Management | kviklån | Partition Wizard | TheBeastReviews | DCSL Guidesmiths | Lemon Law.Site | metrodetroitreview.com | Negative SEO SERVICES | Withnell Car Sales | Hypnos Wellbeing | Tankpenge.dk - Lån penge | Crossword King | Mobil på afbetaling | Talousapu.fi | Buy RDP | Quickbooks Tool Hub | LendMe | Theme Divi | SwitchVPN | VPNRanks | swiindex.com | Coupons4Printing | Five Guys Plumbing Dearborn | Ann Arbor Carpet and Floors | AppDrawn | CloudDevs | StoriesDown | Cyberogism | Wallace Performance | Cheap Dedicated Servers | Fresno Landscapers | VPN Testing | VeePN VPN | Security Gladiators | iBoysoft | Plumbing News and More | Belldinni Inc | Door Design Lab | celltrackingapps.com | GlassesOnWeb.com | Minnesota Child Protection Attorney | Bejamas | Quickbooks Error Codes | TechBuy | Leading Edge Marketing | Richmond Concrete | ShipTheDeal | Drafthound.com | Vasyl Kafidov | GraphCommerce | My Sports Injury Ltd | Global GSM Control | 420HUBS.COM | BestForAndroid';

function Footer(): JSX.Element {
    return (
        <Container>
            <p>Help improve these docs. Open an issue or pull request.</p>
            <br />
            <p>
                <Box sx={{ color: '#543729' }}>Our supporters:</Box>
                <span>{footStr}</span>
            </p>
        </Container>
    );
}

export default Footer;
