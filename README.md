## userテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|

### Association
- has_many :groups, through: :authorization
- has_many :messages



## massagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|string||
|created_at|integer|null: false|

### Association
- belongs_to :user



## authorizationsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :users
- has_many :groups



## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|member|string|null: false, foreign_key: true|

### Association
- has_many :users, through: :authorization
