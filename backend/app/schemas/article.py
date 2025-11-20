from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List

class ArticleBase(BaseModel):
    title: str
    slug: str
    content: str
    excerpt: Optional[str] = None
    cover_image: Optional[str] = None
    published: bool = False
    category_id: Optional[str] = None

class ArticleCreate(ArticleBase):
    author_id: str
    tag_ids: Optional[List[str]] = []

class ArticleUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    excerpt: Optional[str] = None
    cover_image: Optional[str] = None
    published: Optional[bool] = None
    category_id: Optional[str] = None
    tag_ids: Optional[List[str]] = None

class ArticleResponse(ArticleBase):
    id: str
    author_id: str
    published_at: Optional[datetime] = None
    created_at: datetime
    updated_at: Optional[datetime] = None
    
    class Config:
        from_attributes = True