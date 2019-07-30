import React from 'react'

const SingleLaunch = (props) => {
    return (
        <>
            <h2>{ props.launch.mission_name }</h2>
            <p>{ props.launch.details }</p>
            <p>Launching from { props.launch.launch_site.site_name } on { props.launch.launch_date_local }.</p>
            <hr />
        </>
    );
}

export default SingleLaunch