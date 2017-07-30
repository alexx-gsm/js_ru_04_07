import ArticleStore from './ArticleStore';
import BasicStore from './BasicStore';
import { normalizedArticles, normalizedComments } from './../fixtures';

export const commentStore = new BasicStore(normalizedComments);
export const articleStore = new ArticleStore(normalizedArticles);