import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import youtube from '../apis/yt'
import VideoDetail from './VideoDetail'


class App extends React.Component{
    state={videos:[],VideoSelected:null}

    componentDidMount(){
        this.onTermSub('mkbhd')
    }
    onTermSub=async term=>{
        const response=await youtube.get('/search',{
            params:{
                q:term
            }
        })
        this.setState({videos:response.data.items,VideoSelected:response.data.items[0]})
    }
    onVideoSelect=video=>{
        this.setState({VideoSelected:video})
    }
    render(){
        return(
            <div className='ui container'>
                <SearchBar onFormSub={this.onTermSub}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.VideoSelected}/>
                        </div>
                        <div className='five wide column'>
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>             
                </div>
            </div>
        )
    }
}

export default App