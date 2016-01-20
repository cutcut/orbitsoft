<?php

namespace app\controllers;

use yii\rest\ActiveController;
use yii\web\Response;
use yii\data\ActiveDataProvider;
use app\models\Books;
use yii\web\UploadedFile;

class BooksController extends ActiveController
{
    public $modelClass = 'app\models\Books';
	
	public function actions() {
		$actions = parent::actions();
		unset($actions['index']);
		return $actions;
    }
	
    public function actionIndex($order = false, $order_type = false, $search_key = false) {
		
		$order_field = $order ? $order : 'id';
		$order_type = $order_type ? ($order_type == 'DESC' ? SORT_DESC : SORT_ASC) : SORT_ASC;
	
		if($search_key) {
			$query = Books::find()->andFilterWhere(['or',
				['like', 'author', $search_key],
				['like', 'name', $search_key]
			]);
		}
		else $query = Books::find();

        return new ActiveDataProvider([
            'query' => $query,
			'sort' => ['defaultOrder' => [$order_field => $order_type]]

        ]);
    }
	
	public function actionUpload($id) {
		if (($model = Books::findOne($id)) !== null) {
			$file = UploadedFile::getInstanceByName('file');
			if ($file) $file->saveAs($model->getCoverPath());
			else throw new NotFoundHttpException('Failed to load the file.');
		} else {
			throw new NotFoundHttpException('The book does not exist.');
		}
	}
	
	public function behaviors() {
		$behaviors = parent::behaviors();
		$behaviors['contentNegotiator']['formats']['text/html'] = Response::FORMAT_JSON;
		return $behaviors;
	}
	
}