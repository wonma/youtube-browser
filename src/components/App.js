import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount(){
        this.onSearchSubmit('building');
    }

    onSearchSubmit = async (term) => {
        const KEY = 'AIzaSyCD3WOtzSh3GnA2lwC7adpMjGh6IOkVf0s'; // 대문자로 한 건 건드리지 말라는 뜻.

        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        }); 

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]  
        })
    }

    onVideoSelect = (video) => {
        this.setState( {selectedVideo: video} );
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eight wide column">
                            <VideoDetail selectedVideo={this.state.selectedVideo} />
                        </div>
                        <div className="eight wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                     </div>
                </div>
            </div>
        );
    }
}

export default App;