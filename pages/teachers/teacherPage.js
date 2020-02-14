import { Button, Divider } from 'antd'
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import SectionTitle from '../../components/LandingPageComponents/SectionTitle'
import PersonaSection from '../../components/LandingPageComponents/PersonaSection'
import {
  FullPage,
  HalfGrid,
  P,
  PBold,
  Spacer,
  SpacerSmall,
  TripleGrid
} from '../../components/VTheme/VTheme'
import publicPage from '../../hocs/publicPage'

const ButtonContainer = styled.div`
  margin-top: 1rem;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
Button {
  margin-top: 1rem;
}
`

const TextHeroTitle = styled.h1`
  font-weight: 700;
  font-size: 4.5rem;
  color: #000000;
  letter-spacing: -4.05px;
  line-height: 96px;

  @media screen and (min-width: 1026px) and (max-width: 1281px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1025px) {
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: -2px;
    line-height: 1.5;
  }
`

const TextHeroDescription = styled.h1`
  margin-top: 1rem;

  font-weight: 400;
  font-size: 2.2rem;
  letter-spacing: -1.2px;
  line-height: 1.5;

  @media screen and (min-width: 1026px) and (max-width: 1281px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1025px) {
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: -1.1px;
    line-height: 1.5;
  }
`

const TextMiniTitle = styled.p`
  margin-top: 2rem;
  width: 12.8rem;
  color: gray;
  font-size: 1rem;
  letter-spacing: -0.5px;

  font-weight: 400;
  margin-bottom: -0.5rem;
  border-radius: 12px;

  @media screen and (min-width: 1026px) and (max-width: 1281px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1025px) {
  }
  @media screen and (max-width: 768px) {
    margin-top: 4rem;
    margin-bottom: 0.5rem;
  }
`
// Page-Specific Images

const AboutImage = styled.img`
  width: 100%;

  margin: 0 auto;
  margin-bottom: 0.5rem;
  object-fit: fill;
  object-position: center;
  @media screen and (min-width: 1026px) and (max-width: 1281px) {
    margin-top: -8rem;
    width: calc(100vw - 2rem);
    height: auto;
  }
  @media screen and (min-width: 768px) and (max-width: 1025px) {
    width: calc(100vw - 2rem);
    height: auto;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0;
    width: calc(100vw - 2rem);
    height: auto;
  }
`
const ListItemImage = styled.img`
  width: 100%;

  @media screen and (min-width: 1026px) and (max-width: 1281px) {
    width: calc(45vw - 2rem);
    height: auto;
  }
  @media screen and (min-width: 768px) and (max-width: 1025px) {
    width: calc(45vw - 2rem);
    height: auto;
   
  }
  @media screen and (max-width: 768px) {
    width: calc(100vw - 2rem);
    height: auto;
    order: -2;
  }
`
const SponsorIcon = styled.img`
  object-fit: cover;
  object-position: center;

  height: 10rem;
  width: 10rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    object-fit: contain;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`

// Page-Specific Containers

const HeroContainer = styled.div`
  margin: 10rem 0;
  position: relative;

  @media screen and (min-width: 1026px) and (max-width: 1281px) {
    margin-top: 8rem;
    padding-bottom: 1rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1025px) {
    margin-top: 2rem;
    padding-bottom: 2rem;
  }

  @media screen and (max-width: 768px) {
    margin: 5rem 0 4rem 0;
    height: auto;
  }
`
const SectionContainer = styled.div`
  margin: 8rem 0;

  position: relative;
  @media screen and (min-width: 1026px) and (max-width: 1281px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1025px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  @media screen and (max-width: 768px) {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    width: calc(100vw - 2rem);
  }
`

const SectionGridItem = styled.div`
  display: grid;
  align-self: center;
`

const SectionGridItemLeft = styled.div`
  display: grid;
  align-self: center;
  @media screen and (max-width: 768px) {
   order: -1;
  }
`

const SponsorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 10rem);
  grid-gap: 4rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
`

const ItemContainer = styled.div`
  height: 10rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
` // end itemcontainer

const ItemIcon = styled.img`
  width: 2.5rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
` // end itemIcon

export class Teacher extends Component {
  render () {
    return (
      <div>
        <FullPage>
          <Helmet>
            <title>Voluntarily - for Teachers</title>
          </Helmet>
          <HeroContainer>
            <TextMiniTitle>Voluntarily for Teachers</TextMiniTitle>
            <TextHeroTitle>
              Get industry volunteers to help teachers and students in your
              school.
            </TextHeroTitle>

            <ButtonContainer>
              <Button shape='round' size='large' type='primary'>
                Learn More
              </Button>
              &nbsp;&nbsp;
              <Button shape='round' size='large'>
                Teacher Sign up
              </Button>
            </ButtonContainer>
          </HeroContainer>
          <SectionContainer>
            <AboutImage src='/static/test2.png' />

            <TextHeroDescription>
              <strong>Call in support from experts</strong><br />
              Voluntarily helps teachers get assistance and support in their
              teaching from industry volunteers. All you need to do is list what
              kind of skills you want or need, and volunteers will come.
            </TextHeroDescription>
          </SectionContainer>

          <SectionContainer>
            <HalfGrid>
              <ListItemImage src='static/img/landing-pages/teachers/resources.png' />
              <SectionGridItem>
                <h2><strong>Free resources</strong></h2>
                <h4>
                  Organize activities in a few clicks with free educational
                  activity templates and resources
                </h4>
                <ButtonContainer>
                  <Button shape='round' size='large'>
                    See resources
                  </Button>
                </ButtonContainer>
              </SectionGridItem>
            </HalfGrid>
          </SectionContainer>

          <SectionContainer>
            <HalfGrid>
              <SectionGridItemLeft>
                <h2><strong>Bring in Expert Volunteers</strong></h2>
                <h4>
                  Skilled volunteers want to help you out with your teaching by
                  sharing their skills
                </h4>
                <ButtonContainer>
                  <Button shape='round' size='large'>
                    Sign up
                  </Button>
                </ButtonContainer>
              </SectionGridItemLeft>
              <ListItemImage src='static/img/landing-pages/teachers/volunteers.png' />
            </HalfGrid>
          </SectionContainer>

          <Divider />
          <SectionContainer>
            <SectionTitle>We are working with</SectionTitle>
            <SponsorContainer>
              <SponsorIcon src='static/img/partners/MOE.png' />
              <SponsorIcon src='static/img/partners/tec.png' />
              <SponsorIcon src='static/img/partners/Spark.png' />
              <SponsorIcon src='static/img/partners/Westpac.png' />
              <SponsorIcon src='static/img/partners/Datacom.png' />
              <SponsorIcon src='static/img/partners/innovationfund.png' />
              <SponsorIcon src='static/img/partners/ateed.png' />
              {/* <SponsorIcon src='static/img/partners/xero.png' /> */}
              <SponsorIcon src='static/img/partners/uni.png' />
            </SponsorContainer>
          </SectionContainer>
          <Divider />
          <SectionContainer>
            <SectionTitle>Features</SectionTitle>
            <TripleGrid>
              <ItemContainer>
                <ItemIcon src='/static/img/icons/search.svg' />
                <PBold>Placeholder Title</PBold>
                <P>
                  Voluntarily is an awesome project and this is placeholder copy
                  that will be filled soon
                </P>
              </ItemContainer>
              <ItemContainer>
                <ItemIcon src='/static/img/icons/search.svg' />
                <PBold>Impact reporting</PBold>
                <P>
                  V measures the impact your actions have on New Zealand. See
                  how your business ranks in social impact on our leaderboard.
                </P>
              </ItemContainer>
              <ItemContainer>
                <ItemIcon src='/static/img/icons/search.svg' />
                <PBold>HR system integration</PBold>
                <P>
                  V supports single sign on, so you don't have to remember extra
                  credentials if you're a large corp
                </P>
              </ItemContainer>
              <ItemContainer>
                <ItemIcon src='/static/img/icons/search.svg' />
                <PBold>Automated police vetting</PBold>
                <P>
                  V provides you and your staff with an easy way to find schools
                  and charities that need help with tech.
                </P>
              </ItemContainer>
              <ItemContainer>
                <ItemIcon src='/static/img/icons/search.svg' />
                <PBold>Cause Targeting</PBold>
                <P>
                  Our systems enable you to target specific causes you want to
                  support
                </P>
              </ItemContainer>
              <ItemContainer>
                <ItemIcon src='/static/img/icons/search.svg' />
                <PBold>Integration</PBold>
                <P>
                  V supports single sign on, so you don't have to remember extra
                  credentials if you're a large corp
                </P>
              </ItemContainer>
            </TripleGrid>
          </SectionContainer>

          <Divider />

          <SectionTitle>Get Involved</SectionTitle>
          <HalfGrid>
            <ItemContainer>
              <h4>Sign up for updates</h4>
              <SpacerSmall />
              <P>Voluntarily is currently in beta and will launch soon.</P>
              <ButtonContainer>
                <Button type='primary' size='large'>
                  Sign up
                </Button>
              </ButtonContainer>
            </ItemContainer>
            <ItemContainer>
              <h4>Contact us</h4>
              <SpacerSmall />
              <P>
                Want to get more involved in the project? Get in touch below.
              </P>
              <br />
              <a>business@voluntarily.nz</a>
              <br />
              <br />
              <a>+64-9-123-4567</a>
              <ButtonContainer />
            </ItemContainer>
          </HalfGrid>
          <Divider />
          <Spacer />
          <SectionTitle>
            <FormattedMessage
              id='landing.sectiontitle.persona'
              defaultMessage='Who we help'
            />
          </SectionTitle>
          <PersonaSection />
        </FullPage>
      </div>
    )
  }
}

export default publicPage(Teacher)
