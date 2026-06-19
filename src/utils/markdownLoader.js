// Simple front matter parser
const parseFrontMatter = (content) => {
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontMatterRegex);
  
  if (!match) {
    return { data: {}, content };
  }
  
  const [, frontMatterText, markdownContent] = match;
  const data = {};
  
  // Parse front matter fields
  frontMatterText.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
      data[key.trim()] = value;
    }
  });
  
  return { data, content: markdownContent };
};

// Import all markdown files
import heartCareAr from '../posts/ar/heart-care-home.md?raw';
import newbornCareAr from '../posts/ar/newborn-care.md?raw';
import diabetesAr from '../posts/ar/diabetes-management.md?raw';
import elderlyNutritionAr from '../posts/ar/elderly-nutrition.md?raw';
import elderlyExerciseAr from '../posts/ar/elderly-exercise.md?raw';
import infectionPreventionAr from '../posts/ar/infection-prevention.md?raw';

import heartCareEn from '../posts/en/heart-care-home.md?raw';
import newbornCareEn from '../posts/en/newborn-care.md?raw';
import diabetesEn from '../posts/en/diabetes-management.md?raw';
import elderlyNutritionEn from '../posts/en/elderly-nutrition.md?raw';
import elderlyExerciseEn from '../posts/en/elderly-exercise.md?raw';
import infectionPreventionEn from '../posts/en/infection-prevention.md?raw';

// Store posts data
const postsData = {
  ar: [
    { content: heartCareAr, slug: 'heart-care-home' },
    { content: newbornCareAr, slug: 'newborn-care-tips' },
    { content: diabetesAr, slug: 'diabetes-management-guide' },
    { content: elderlyNutritionAr, slug: 'elderly-nutrition-guide' },
    { content: elderlyExerciseAr, slug: 'elderly-exercise-guide' },
    { content: infectionPreventionAr, slug: 'infection-prevention-home' }
  ],
  en: [
    { content: heartCareEn, slug: 'heart-care-home' },
    { content: newbornCareEn, slug: 'newborn-care-tips' },
    { content: diabetesEn, slug: 'diabetes-management-guide' },
    { content: elderlyNutritionEn, slug: 'elderly-nutrition-guide' },
    { content: elderlyExerciseEn, slug: 'elderly-exercise-guide' },
    { content: infectionPreventionEn, slug: 'infection-prevention-home' }
  ]
};

// Function to load all blog posts from a specific language directory
export const loadBlogPosts = async (language = 'ar') => {
  try {
    const posts = [];
    const languagePosts = postsData[language] || postsData.ar;
    
    languagePosts.forEach(({ content, slug }) => {
      const { data: frontMatter, content: markdownContent } = parseFrontMatter(content);
      posts.push({
        slug,
        frontMatter,
        content: markdownContent,
        language
      });
    });
    
    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date));
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
};

// Function to load a specific blog post by slug
export const loadBlogPost = async (slug, language = 'ar') => {
  try {
    const posts = await loadBlogPosts(language);
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error('Error loading blog post:', error);
    return null;
  }
};

// Function to get blog post categories
export const getBlogCategories = async (language = 'ar') => {
  try {
    const posts = await loadBlogPosts(language);
    const categories = [...new Set(posts.map(post => post.frontMatter.category))];
    return categories;
  } catch (error) {
    console.error('Error loading blog categories:', error);
    return [];
  }
};

// Function to search blog posts
export const searchBlogPosts = async (query, language = 'ar') => {
  try {
    const posts = await loadBlogPosts(language);
    const searchQuery = query.toLowerCase();
    
    return posts.filter(post => 
      post.frontMatter.title.toLowerCase().includes(searchQuery) ||
      post.frontMatter.description.toLowerCase().includes(searchQuery) ||
      post.content.toLowerCase().includes(searchQuery)
    );
  } catch (error) {
    console.error('Error searching blog posts:', error);
    return [];
  }
};

// Function to get featured posts
export const getFeaturedPosts = async (language = 'ar', limit = 3) => {
  try {
    const posts = await loadBlogPosts(language);
    return posts.slice(0, limit);
  } catch (error) {
    console.error('Error loading featured posts:', error);
    return [];
  }
};

// Function to get posts by category
export const getPostsByCategory = async (category, language = 'ar') => {
  try {
    const posts = await loadBlogPosts(language);
    return posts.filter(post => post.frontMatter.category === category);
  } catch (error) {
    console.error('Error loading posts by category:', error);
    return [];
  }
};

// Function to get related posts
export const getRelatedPosts = async (currentSlug, category, language = 'ar', limit = 3) => {
  try {
    const posts = await loadBlogPosts(language);
    return posts
      .filter(post => post.slug !== currentSlug && post.frontMatter.category === category)
      .slice(0, limit);
  } catch (error) {
    console.error('Error loading related posts:', error);
    return [];
  }
};

// Function to get recent posts
export const getRecentPosts = async (language = 'ar', limit = 5) => {
  try {
    const posts = await loadBlogPosts(language);
    return posts.slice(0, limit);
  } catch (error) {
    console.error('Error loading recent posts:', error);
    return [];
  }
};

// Function to get posts by author
export const getPostsByAuthor = async (author, language = 'ar') => {
  try {
    const posts = await loadBlogPosts(language);
    return posts.filter(post => post.frontMatter.author === author);
  } catch (error) {
    console.error('Error loading posts by author:', error);
    return [];
  }
};

// Function to get all authors
export const getBlogAuthors = async (language = 'ar') => {
  try {
    const posts = await loadBlogPosts(language);
    const authors = [...new Set(posts.map(post => post.frontMatter.author))];
    return authors;
  } catch (error) {
    console.error('Error loading blog authors:', error);
    return [];
  }
};

// Function to get blog statistics
export const getBlogStats = async (language = 'ar') => {
  try {
    const posts = await loadBlogPosts(language);
    const categories = getBlogCategories(language);
    const authors = getBlogAuthors(language);
    
    return {
      totalPosts: posts.length,
      totalCategories: categories.length,
      totalAuthors: authors.length,
      latestPost: posts[0] || null,
      oldestPost: posts[posts.length - 1] || null
    };
  } catch (error) {
    console.error('Error loading blog stats:', error);
    return {
      totalPosts: 0,
      totalCategories: 0,
      totalAuthors: 0,
      latestPost: null,
      oldestPost: null
    };
  }
};
