import cls from 'classnames';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemInfo from './ArticleItemInfo';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStats from './ArticleItemStats';

export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc =false,
  isShowCategoies = false,
  isShowAvatar = true,
  post,
}) {
  
  if (!post) {
    return null
  }
  
  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow,
  })
  
  const title = post.title.rendered
  const thumbnail = post.featured_media_url
  const shortDesc = post.excerpt.rendered
  const slug = post.slug
  const postURL = '/blogs/' + slug
  const categoriesId = post.categories

  const created = post.date;
  const authorId = post.author;
  const authorName = post.author_data.nickname;
  const authorAvatar = post.author_data.avatar;
  const authorLink = `/user/${post.author}`;

  const viewCount = post.view_count;
  if(!slug) {return}
  
  return (
    <article className={classes}>
      <ArticleItemThumb thumbnail={thumbnail} postURL={postURL} />
      <div className="article-item__content">

        { isShowCategoies && <ArticleItemCategories categoriesId={categoriesId} /> }
        { isShowCategoies && <ArticleItemStats viewCount={viewCount}/> }

        <ArticleItemTitle title={title} postURL={postURL} />

        { isShowDesc && <ArticleItemDesc shortDesc={shortDesc} /> }

        <ArticleItemInfo isShowAvatar={isShowAvatar}
          created={created}
          authorId={authorId}
          authorName={authorName}
          authorLink={authorLink}
          authorAvatar={authorAvatar} />
      </div>
    </article>
  )
}

/**
 * Bài tập về nhà: Hiển thị đầy đủ thông tin bài viết ra giao diện
 *  - Title
 *  - Thumbnail
 *  - Author nickname, avatar
 *  - Date -> https://day.js.org/
 *  - Description (Popular)
 *      -> Xủ lí dữ liệu căt ngắn bớt nếu quá dài 
 *  - Categories (Popular)
 *      Data không có sẵn. Back End chỉ trả về cho chúng ta danh sách ID của danh mục mà thôi
 *        post.categories: [9, 10, 15]
 *      -> Front End phải hiển thị được thông tin danh mục dựa vào ID của nó
 *      -> B1: Gọi API lấy danh sách categories từ Back End lưu lại trong Store
 *          {{base_url}}/wp/v2/categories?per_page=100&page=1
 *      -> B2: Quay về bài toán tìm kiếm một phần tử trong Array dựa vào ID để hiển thị thông tin
 *  - Views Count (Popular)
 * 
 * Bài tập về nhà:  
 *  - API gọi danh sách bài viết tổng hợp
 *      -> actFetchPostsAsync
 *      -> actFetchPosts
 *  - Xử lí chức năng phân trang (Pagination)
 *  - Trong lần đầu tiên F5 lại trang chỉ show ra 2 bài viết (per_page = 2, page = 1)
 *  - Nếu User nhấn vào nút "Xem thêm"
 *      -> Tiếp tục gọi một API nữa với (per_page = 2, page = 2)
 *      -> Nối array mới vào array cũ -> Hiển thị ra giao diện
 */