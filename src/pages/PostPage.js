import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchallPosts } from '../actions/postsActions';

import { Post } from '../components/Post';

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
      dispatch(fetchallPosts());
  }, [dispatch]);

  console.log(posts);
  const renderPosts = () => {
    if (loading) return <p>Loading...</p>;
    if (hasErrors) return <p>No post to display ...</p>;
    return posts.map((post) => <Post key={post.id} post={post} />);
  };

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
});

export default connect(mapStateToProps)(PostsPage);
