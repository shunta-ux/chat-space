## userテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|

### Association
- has_many :authorizations
- has_many :groups, through: :authorizations
- has_many :messages



## massagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|string||
|created_at|integer|null: false|

### Association
- belongs_to :user
- belongs_to :group


## authorizationsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group




## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|member|string|null: false, foreign_key: true|

### Association
- has_many :authorizations
- has_many :users, through: :authorizations
- has_many :messages