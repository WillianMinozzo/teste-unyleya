<?php

namespace App\Http\Controllers;

use App\Models\Autor;
use Illuminate\Http\Request;

class AutorController extends Controller
{
    public function index()
    {
        return Autor::all();
    }

    public function show($id)
    {
        return Autor::findOrFail($id);
    }

    public function store(Request $request)
    {
        $data = $request->post();

        

        $model = new Autor($data);
        $model->save();

        return response()->json($model->toArray());
    }

    public function update(Request $request, $id)
    {
        $data = $request->post();

       
        $model = Autor::findOrFail($id);
        $model->fill($data);
        $model->save();

        return response()->json($model->toArray());
    }

    public function destroy($id)
    {
        $model = Autor::findOrFail($id);
        $model->delete();

        return response()->noContent();
    }
}
