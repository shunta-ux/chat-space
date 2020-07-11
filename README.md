## user_createsテーブル

|Column|Type|Options|
|------|----|-------|
|user_name|string|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|


### Association
- has_many :tweets
- has_many :user_edits
- has_many :group_creates
- has_many :group_edits



## user_editsテーブル

|Column|Type|Options|
|------|----|-------|
|user_name|string|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|



### Association
- belongs_to :user_creates
- belongs_to :group_edits
- has_many :tweets
- has_many :group_creates


## tweetsテーブル

|Column|Type|Options|
|------|----|-------|
|user_name|string|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|
|text|string|null: false, foreign_key: true|
|created_at|integer|null: false, foreign_key: true|

### Association
- belongs_to :user_creates
- belongs_to :user_edits
- belongs_to :group_creates
- belongs_to :group_edits



## groups_createsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, foreign_key: true|
|group_member|string|null: false, foreign_key: true|

### Association
- belongs_to :user_creates
- belongs_to :user_edits
- has_many :tweets
- has_many :group_edits



## group_editsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, foreign_key: true|
|group_member|string|null: false, foreign_key: true|

### Association
- belongs_to :user_creates
- belongs_to :group_creates
- has_many :tweets
- has_many :user_edits




