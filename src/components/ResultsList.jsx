import React, {useContext} from 'react';
import {SiteContext} from'../data/SiteContext'
import data from '../data/Sites.json'
import SearchCard from "./SearchCard";
import IssuesList from "./Github/Issues/IssuesList";
import DiscussionList from "./StackOverflow/Discussions/DiscussionList";
import PrsList from "./Github/Prs/PrsList";
import {DiscussionsProvider} from "../data/StackOverflow/DiscussionsContext";
import {IssuesProvider} from "../data/Github/IssuseContext";
import {PrProvider} from "../data/Github/PrsContext";
import {RepoProvider} from "../data/Github/RepoContext";
import RepoList from "./Github/Repos/RepoList";

function ResultsList(props) {


    const [site,setSite] = useContext(SiteContext)

    if (data.sites[site].name === "Github Issues"){
        return (
            <div className='w-full h-full flex flex-col '>
                <IssuesProvider>
                <SearchCard/>
                <IssuesList/>
                </IssuesProvider>
            </div>
        );
    }
    if (data.sites[site].name === "StackOverflow"){
        return (

            <div className='w-full h-full flex flex-col '>
                <DiscussionsProvider>
                <SearchCard/>
                <DiscussionList/>
                </DiscussionsProvider>
            </div>
        );

    } if (data.sites[site].name === "Github Prs") {
        return (
            <div className='w-full h-full flex flex-col '>
                <PrProvider>
                <SearchCard/>
                <PrsList/>
                </PrProvider>
            </div>
        );
    } if (data.sites[site].name === "Github Repo") {
        return (
            <div className='w-full h-full flex flex-col '>
                <RepoProvider>
                    <SearchCard/>
                    <RepoList/>
                </RepoProvider>
            </div>
        );
    }
}

export default ResultsList;