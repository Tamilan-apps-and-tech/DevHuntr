import React, {useContext} from 'react';
import {SiteContext} from'../data/SiteContext'
import {QueryContext} from'../data/QueryContext'
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
import TypoCard from "./TypoCard";
import {AndroidDocsProvider} from "../data/Docs/AndroidDocsContext";
import {JetpackProvider} from "../data/Libraries/JetpackContext";
import JetapackList from "./Libraries/JetapackAndroid/JetapackList";
import {NpmProvider} from "../data/Libraries/NpmContext";
import NpmList from "./Libraries/Npm/NpmList";
import resources from "../data/Res.json";
import {ResContext} from "../data/ResContext";
import FlutterDocsList from "./Docs/Flutter/FlutterDocsList";
import MozillaWebDocsList from "./Docs/MozillaWebDocs/MozillaWebDocsList";
import {MozillaWebDocsProvider} from "../data/Docs/MozillaWebDocsContext";
import ReactNativeDocsList from "./Docs/ReactNative/ReactNativeDocsList";
import AndroidDocsList from "./Docs/Android/AndroidDocsList";
import {FlutterDocsProvider} from "../data/Docs/FlutterDocsContext";
import {ReactNativeDocsProvider} from "../data/Docs/ReactNativeDocsContext";
import {DockerDocsProvider} from "../data/Docs/DockerDocsContext";
import DockerDocsList from "./Docs/Docker/DockerDocsList";
import {FirebaseDocsProvider} from "../data/Docs/FirebaseDocsContext";
import FirebaseDocsList from "./Docs/Firebase/FirebaseDocsList";
import {TensorflowDocsProvider} from "../data/Docs/TensrflowDocsContext";
import TensorflowDocsCard from "./Docs/Tensorflow/TensorflowDocsCard";
import TensorflowDocsList from "./Docs/Tensorflow/TensorflowDocsList";
import {GoogleWebDocsProvider} from "../data/Docs/GoogleWebDocsContext";
import GoogleWebDocsList from "./Docs/GoogleWeb/GoogleWebDocsList";
import {GoogleMapDocsProvider} from "../data/Docs/GoogleMapDocsContext";
import GoogleMapDocsList from "./Docs/GoogleMap/GoogleMapDocsList";
import {DjangoDocsProvider} from "../data/Docs/DjangoDocsContext";
import DjangoDocsList from "./Docs/DjangoDocs/DjangoDocsList";
import {RubyDocsProvider} from "../data/Docs/RubyDocsContext";
import RubyDocsList from "./Docs/Ruby/RubyDocsList";
import {DartDocsProvider} from "../data/Docs/DartDocsContext";
import DartDocsList from "./Docs/Dart/DartDocsList";
import {KubernetesDocsProvider} from "../data/Docs/KubernetesDocsContext";
import KubernetesDocsList from "./Docs/Kubernetes/KubernetesDocsList";
import {GoogleCloudDocsProvider} from "../data/Docs/GoogleCloudDocsContext";
import GoogleCloudDocsList from "./Docs/GoogleCloud/GoogleCloudDocsList";
import {JestDocsProvider} from "../data/Docs/JestDocsContext";
import JestDocsList from "./Docs/Jest/JestDocsList";
import {MongoDocsProvider} from "../data/Docs/MongoDocsContext";
import MongoDocsList from "./Docs/Mongo/MongoDocsList";
import KotlinDocsCard from "./Docs/Kotlin/KotlinDocsCard";
import {KotlinDocsProvider} from "../data/Docs/KotlinDocsContext";
import {AzureDocsProvider} from "../data/Docs/AzureDocsContext";
import KotlinDocsList from "./Docs/Kotlin/KoltinDocsList";
import AzureDocsList from "./Docs/Azure/AzureDocsList";
import {DotnetDocsProvider} from "../data/Docs/DotnetDocsContext";
import DotnetDocsList from "./Docs/DotNet/DotnetDocsList";
import XamarinDocsList from "./Docs/Xamarin/XamarinDocsList";
import {XamarinDocsProvider} from "../data/Docs/XamarinDocsContext";

function ResultsList(props) {


    const [site,setSite] = useContext(SiteContext)
    const [query,setQuery] = useContext(QueryContext)
    const [res,setRes] = useContext(ResContext)


    if (data.sites[site].name === "Github Issues"){
        return (
            <div className='w-full h-full flex flex-col '>
                <IssuesProvider>
                <SearchCard/>
                    <TypoCard/>
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
                    <TypoCard/>
                <DiscussionList/>
                </DiscussionsProvider>
            </div>
        );

    } if (data.sites[site].name === "Github Prs") {
        return (
            <div className='w-full h-full flex flex-col '>
                <PrProvider>
                <SearchCard/>
                    <TypoCard/>
                <PrsList/>
                </PrProvider>
            </div>
        );
    } if (data.sites[site].name === "Github Repo") {
        return (
            <div className='w-full h-full flex flex-col '>
                <RepoProvider>
                    <SearchCard/>
                    <TypoCard/>
                    <RepoList/>
                </RepoProvider>
            </div>
        );
    } if (data.sites[site].name === "References") {

        if (resources[res].id === 0 ){
            return (
                <div className='w-full h-full flex flex-col '>
                    <AndroidDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <AndroidDocsList/>
                    </AndroidDocsProvider>
                </div>
            );
        }
        if (resources[res].id === 1 ){
            return (
                <div className='w-full h-full flex flex-col '>
                    <FlutterDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <FlutterDocsList/>
                    </FlutterDocsProvider>
                </div>
            );
        }
        if (resources[res].id === 2 ){
            return(
            <div className='w-full h-full flex flex-col '>
                <ReactNativeDocsProvider>
                    <SearchCard/>
                    <TypoCard/>
                    <ReactNativeDocsList/>
                </ReactNativeDocsProvider>
            </div>
        );
        }
        if (resources[res].id === 3){
            return(
                <div className='w-full h-full flex flex-col '>
                    <MozillaWebDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <MozillaWebDocsList/>
                    </MozillaWebDocsProvider>
                </div>
            );
        }
        if (resources[res].id === 4){
            return(
                <div className='w-full h-full flex flex-col '>
                    <DockerDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <DockerDocsList/>
                    </DockerDocsProvider>
                </div>
            );
        }
        if (resources[res].id === 5){
            return(
                <div className='w-full h-full flex flex-col '>
                    <FirebaseDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <FirebaseDocsList/>
                    </FirebaseDocsProvider>
                </div>
            );
        }
        if (resources[res].id === 6){
            return(
                <div className='w-full h-full flex flex-col '>
                    <TensorflowDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <TensorflowDocsList/>
                    </TensorflowDocsProvider>
                </div>
            );
        }
        if (resources[res].id === 7){
            return(
                <div className='w-full h-full flex flex-col '>
                    <GoogleWebDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <GoogleWebDocsList/>
                    </GoogleWebDocsProvider>
                </div>
            );
        }
        if (resources[res].id === 8){
            return(
                <div className='w-full h-full flex flex-col '>
                    <GoogleMapDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <GoogleMapDocsList/>
                    </GoogleMapDocsProvider>
                </div>
            );
        }
        if (resources[res].id === 9){
            return(
                <div className='w-full h-full flex flex-col '>
                    <DjangoDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <DjangoDocsList/>
                    </DjangoDocsProvider>
                </div>
            );
        }
        if (resources[res].id === 10){
            return(
                <div className='w-full h-full flex flex-col '>
                    <RubyDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <RubyDocsList/>
                    </RubyDocsProvider>
                </div>
            );
        }
        if (resources[res].id === 11){
            return(
                <div className='w-full h-full flex flex-col '>
                    <DartDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <DartDocsList/>
                    </DartDocsProvider>
                </div>
            );
        }
        if (resources[res].id === 12){
            return(
                <div className='w-full h-full flex flex-col '>
                    <JestDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <JestDocsList/>
                    </JestDocsProvider>
                </div>
            );
        }
        if (resources[res].id === 13){
            return(
                <div className='w-full h-full flex flex-col '>
                    <MongoDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <MongoDocsList/>
                    </MongoDocsProvider>
                </div>
            );
        }
        if (resources[res].id === 14){
            return(
                <div className='w-full h-full flex flex-col '>
                    <KubernetesDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <KubernetesDocsList/>
                    </KubernetesDocsProvider>
                </div>
            );
        }
        if (resources[res].id === 15){
            return(
                <div className='w-full h-full flex flex-col '>
                    <GoogleCloudDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <GoogleCloudDocsList/>
                    </GoogleCloudDocsProvider>
                </div>
            );
        }
        if (resources[res].id === 16){
            return(
                <div className='w-full h-full flex flex-col '>
                    <KotlinDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <KotlinDocsList/>
                    </KotlinDocsProvider>
                </div>
            );
        }
        if (resources[res].id === 17){
            return(
                <div className='w-full h-full flex flex-col '>
                    <AzureDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <AzureDocsList/>
                    </AzureDocsProvider>
                </div>
            );
        }
        if (resources[res].id === 18){
            return(
                <div className='w-full h-full flex flex-col '>
                    <DotnetDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <DotnetDocsList/>
                    </DotnetDocsProvider>
                </div>
            );
        }

        if (resources[res].id === 19){
            return(
                <div className='w-full h-full flex flex-col '>
                    <XamarinDocsProvider>
                        <SearchCard/>
                        <TypoCard/>
                        <XamarinDocsList/>
                    </XamarinDocsProvider>
                </div>
            );
        }

    } if (data.sites[site].name === "Jetpack Android") {
        return (
            <div className='w-full h-full flex flex-col '>
                <JetpackProvider>
                    <SearchCard/>
                    <TypoCard/>
                    <JetapackList/>
                </JetpackProvider>
            </div>
        );
    }if (data.sites[site].name === "Npm Package") {
        return (
            <div className='w-full h-full flex flex-col '>
                <NpmProvider>
                    <SearchCard/>
                    <TypoCard/>
                    <NpmList/>
                </NpmProvider>
            </div>
        );
    }
}

export default ResultsList;