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
	
    public function actionIndex() {
		$order_field = isset($_GET['order']) && $_GET['order'] ? $_GET['order'] : 'id';
		$order_type = isset($_GET['order_type']) && $_GET['order_type'] ? ($_GET['order_type'] == 'DESC' ? SORT_DESC : SORT_ASC) : SORT_ASC;
	
		if(isset($_GET['search_key']) && $_GET['search_key']) {
			$query = Books::find()->andFilterWhere(['or',
				['like', 'author', $_GET['search_key']],
				['like', 'name', $_GET['search_key']]]);
		}
		else $query = Books::find();

        return new ActiveDataProvider([
            'query' => $query,
			/*
			'pagination' => [
				'pageSize' => 10,
			],
			*/
			'sort' => ['defaultOrder' => [$order_field => $order_type]]

        ]);
    }
	
	public function actionUpload($id) {
		/*
		$f = fopen ('test_file_upload.log', "a+");
		fwrite($f, print_r($_FILES, 1));
		fclose($f);
		*/
		if (($model = Books::findOne($id)) !== null) {
			$file = UploadedFile::getInstanceByName('file');
			if ($file) $file->saveAs($model->getCoverPath());
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