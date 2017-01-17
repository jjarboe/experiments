//import { Grid } from '@extjs/reactor/modern';
import { reactify } from '@extjs/reactor';
const Grid = reactify('grid');

var React = require('react'),
    $     = require('jquery'),

    Item  = require('./item'),

    List;

List = React.createClass({
    getInitialState: function () {
        return { posts: [] };
    },
    componentWillMount: function () {
        this.fetchLatestNews();
    },
    fetchLatestNews: function () {
        $.ajax({
            url:       'https://hn.algolia.com/api/v1/search?tags=front_page',
            dataType:  'json',
            data:      { format: 'json' },
            success: function (result) {
                this.setState({ posts: result.hits });
            }.bind(this),
            error: function () {
                alert('error getting posts. please try again later');
            }
        });
    },
    render: function () {
        return <Grid
                store={{
                    fields: ['objectId'],
                    data: this.state.posts
                }}
                columns={[
                    { text: 'Id', dataIndex: 'objectId', flex: 1 },
                ]}
            />;
    }
});
/*
        return <ol className="posts">
            {this.state.posts.map(function (post) {
                return <Item key={post.objectID} post={post}/>
            })}
        </ol>;
*/

module.exports = List;
