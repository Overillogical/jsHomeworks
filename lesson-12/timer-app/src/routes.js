import {parse} from 'url';
import {getAllTimes, saveCurrentTime, deleteTimeById, updateTimeById} from './repositories/timer.repository.js';

export async function router(req, res) {
    // Получаем путь (с помощью утилиты parse) и метод из запроса
    const url = parse(req.url || '', true);
    const method = req.method;
    const appJsonResponse = ((res, code, output) => {
        res.writeHead(code, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(output))
    })

    // Обработка запроса: GET /timer
    if (url.pathname === '/timer' && method === 'GET') {
        const times = await getAllTimes();

        // Говорим клиенту: "Всё ок, вот JSON"
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(times)); // Отправляем массив записей в формате JSON
        return;
    }
    // Changing saved time
    if (url.pathname?.startsWith('/timer/') && method === 'PUT') {

        const id = Number((url.pathname.split('/')[2]))
        if (isNaN(id) || id <= 0 || !Number.isInteger(id)) {
            appJsonResponse(res, 400, {error: "Invalid timer ID"});
            return
        }
        const saved_at = url.query.saved_at
        const date = new Date(saved_at)
        if (Number.isNaN(date.getTime()) || date.toISOString() !== saved_at) {
            appJsonResponse(res, 400, {error: 'Invalid saved_at format'});
            return
        }
        const updateResult = await updateTimeById(id, saved_at)
        if (updateResult === undefined) {
            appJsonResponse(res, 404, {error: 'id not found'});
            return
        }
        appJsonResponse(res, 200, updateResult);

        return;
    }


    if (url.pathname === '/timer/save' && method === 'POST') {
        const time = await saveCurrentTime();
        res.writeHead(201, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(time));
        return;
    }

    if (url.pathname?.startsWith('/timer/') && method === 'DELETE') {
        const id = url.pathname.split('/')[2];
        await deleteTimeById(id);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: `Deleted time with ID ${id}`}));
        return;
    }

    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not found');
}