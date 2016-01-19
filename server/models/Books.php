<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "books".
 *
 * @property integer $id
 * @property string $name
 * @property string $description
 * @property string $author
 * @property string $pub_year
 */
class Books extends \yii\db\ActiveRecord
{	
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'books';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'description', 'author'], 'required'],
            [['pub_year'], 'safe'],
            [['pub_year'], 'integer', 'max' => date("Y")],
            [['name'], 'string', 'max' => 150],
            [['description'], 'string', 'max' => 2000],
            [['author'], 'string', 'max' => 100],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'description' => 'Description',
            'author' => 'Author',
            'pub_year' => 'Year of publication',
        ];
    }
	
    public function getCoverPath()
    {
        return 'upload/cover_'.$this->id;
    }
	
	public function fields() {
		$fields = parent::fields();

		$fields['cover']  = function ($model) {
            return file_exists($model->getCoverPath()) ? $model->getCoverPath() : '';
        };

		return $fields;
	}
	
}
