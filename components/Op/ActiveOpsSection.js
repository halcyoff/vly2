/* Display a grid of goal cards from an personal goals
 */
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useSelector } from 'react-redux'
import { ProfileSection, ProfileSectionTitle } from '../VTheme/Profile'
import Loading from '../Loading'
import OpList from './OpList'

/* ActiveOpsSection
  shows the list of opportunities currently in draft and active mode
  and owned by the current person.
  it expects to find a populated list of opportunities
  in the redux store, placed there by the parent page
  */

export const ActiveOpsSection = () => {
  const opportunities = useSelector(
    state => state.opportunities // list of ops I own
  )
  if (!opportunities.sync) return <Loading label='opportunities' entity={opportunities} />
  const ops = opportunities.data
  if (!ops.length) return null
  return (
    <ProfileSection>
      <ProfileSectionTitle>
        <FormattedMessage
          id='ActivOpsSection.title'
          defaultMessage='You are asking for'
          decription='Subtitle for teacher home page for active opportunities that have been hosted'
        />
        <small>Activities you requested help from Volunteers with are listed below:</small>
      </ProfileSectionTitle>
      <OpList ops={ops} />
    </ProfileSection>
  )
}

export default ActiveOpsSection
