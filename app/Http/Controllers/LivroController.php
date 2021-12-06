<?php

namespace App\Http\Controllers;

use App\Models\Livro;
use Illuminate\Http\Request;

class LivroController extends Controller
{
    public function index()
    {
        return Livro::all();
    }

    public function show($id)
    {
        return Livro::findOrFail($id);
    }

    public function store(Request $request)
    {
        $data = $request->post();

        

        $model = new Livro($data);
        $model->save();

        return response()->json($model->toArray());
    }

    public function update(Request $request, $id)
    {
        $data = $request->post();

       
        $model = Livro::findOrFail($id);
        $model->fill($data);
        $model->save();

        return response()->json($model->toArray());
    }

    public function destroy($id)
    {
        $model = Livro::findOrFail($id);
        $model->delete();

        return response()->noContent();
    }
}
