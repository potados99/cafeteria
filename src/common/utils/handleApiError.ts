/**
 * This file is part of INU Cafeteria.
 *
 * Copyright (C) 2021 INU Global App Center <potados99@gmail.com>
 *
 * INU Cafeteria is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * INU Cafeteria is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import notify from '../../presentation/components/utils/notify';
import ApiError from '../../data/exceptions/ApiError';
import Unauthorized from '../../data/exceptions/Unauthorized';
import InternalError from '../../data/exceptions/InternalError';
import CannotReachServer from '../../data/exceptions/CannotReachServer';
import UnhandledHttpError from '../../data/exceptions/UnhandledHttpError';

export default function handleApiError(e: Error) {
  if (!(e instanceof ApiError)) {
    notify(`π± μμμΉ λͺ»ν μ€λ₯μλλ€! ${e}`);
    return;
  }

  if (e instanceof CannotReachServer) {
    notify('π₯Ί μλ²μ μ°κ²°ν  μ μμ΅λλ€. μΈν°λ· μνλ₯Ό νμΈν΄ μ£ΌμΈμ!');
  } else if (e instanceof Unauthorized) {
    notify('π¨ μΈμ¦λμ§ μμ μμ²­μλλ€.');
  } else if (e instanceof InternalError) {
    notify('π€― μλ² λ΄λΆμμ λ¬Έμ κ° μκ²Όμ΅λλ€.');
  } else if (e instanceof UnhandledHttpError) {
    notify(`π§ μλ΅ μ½λ ${e.statusCode}μλλ€.`);
  } else {
    notify(`π λ―Έμ² μ²λ¦¬νμ§ λͺ»ν μ€λ₯μλλ€! ${e}`);
  }
}
