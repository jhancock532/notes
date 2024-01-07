import React from 'react';

import PostCard from '/components/PostCard';

import styles from './PostListing.module.scss';

function sortPostsByDate(posts) {
  return posts.sort((a, b) => {
    return new Date(b.data.published) - new Date(a.data.published);
  });
}

const generateListOfTags = (posts) => {
  let tags = {};

  for (let i = 0; i < posts.length; i += 1) {
    if (posts[i].data.tags) {
      for (let j = 0; j < posts[i].data.tags.length; j += 1) {
        if (!Object.keys(tags).includes(posts[i].data.tags[j])) {
          tags[posts[i].data.tags[j]] = 1;
        } else {
          tags[posts[i].data.tags[j]] += 1;
        }
      }
    }
  }
  return tags;
};

export default function PostListing({ posts, type }) {
  const [selectedTags, setSelectedTags] = React.useState([]);

  const tags = generateListOfTags(posts);

  const handleFilterClicked = (tag) => {
    if (selectedTags.includes(tag)) {
      const indexOfTag = selectedTags.indexOf(tag);
      selectedTags.splice(indexOfTag, 1);
      setSelectedTags([...selectedTags]);
    } else {
      setSelectedTags([tag, ...selectedTags]);
    }
  };

  const filteredPosts =
    selectedTags.length > 0
      ? posts.filter((post) => {
          for (let i = 0; i < post.data.tags.length; i += 1) {
            if (selectedTags.includes(post.data.tags[i])) {
              return true;
            }
          }
          return false;
        })
      : posts;

  return (
    <div className={styles.container}>
      <details className={styles.tagFilterContainer}>
        <summary>Filter posts by tag</summary>
        <div className={styles.tagsContainer}>
          {Object.keys(tags)
            .sort()
            .map((tag, index) => (
              <div key={index} className={styles.tagFilter}>
                <input
                  type="checkbox"
                  id={`tag-checkbox-${tag}`}
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleFilterClicked(tag)}
                  className={styles.tagFilter__checkbox}
                />
                <label
                  htmlFor={`tag-checkbox-${tag}`}
                  className={styles.tagFilter__label}
                >
                  {`${tag} (${tags[tag]})`}
                </label>
              </div>
            ))}
        </div>
      </details>
      <div className={styles.postContainer}>
        {sortPostsByDate(filteredPosts).map((post) => (
          <PostCard key={post.filePath} post={post} type={type} />
        ))}
      </div>
    </div>
  );
}
