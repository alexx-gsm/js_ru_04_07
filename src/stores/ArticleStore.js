import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, START, SUCCESS, FAIL } from './../constants';
import BasicStore from './BasicStore';

class ArticleStore extends BasicStore {
    constructor(...args) {
        super(...args);

        this.errors = [];

        this._registerActionSubscription(action => {
            const { type, payload } = action;

            switch (type) {
                case DELETE_ARTICLE:
                    this._delete(payload.id);
                    break;

                case LOAD_ALL_ARTICLES + START:
                    this.loading = true;
                    break;

                case LOAD_ALL_ARTICLES + SUCCESS:
                    payload.response.forEach(this._add);
                    this.loading = false;
                    break;

                case LOAD_ALL_ARTICLES + FAIL:
                    this.errors.push(payload.error);
                    this.loading = false;
                    break;

                default: return;
            }

            this.emitChange();
        })
    }
}

export default ArticleStore;