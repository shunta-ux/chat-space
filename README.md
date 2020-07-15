## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|

### Association
- belongs_to :user_group
- has_many :groups, through: :user_groups
- has_many :messages



## massagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|string||
|created_at|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :user
- belongs_to :group


## users_groupsテーブル
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
|management|string|null: false, foreign_key: true|

### Association
- belongs_to :user_group
- has_many :users, through: :user_groups
- has_many :messages