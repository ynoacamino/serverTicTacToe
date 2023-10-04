import { GraphQLError } from 'graphql';
import Table from '../../db/models/Table.js';

const resetTable = async () => {
  const id = '651dcafb0f57c99a604cc15c';
  let table;
  try {
    table = await Table.findById(id);
  } catch (err) {
    throw new GraphQLError(err.message);
  }

  table.p_0 = 0;
  table.p_1 = 0;
  table.p_2 = 0;
  table.p_3 = 0;
  table.p_4 = 0;
  table.p_5 = 0;
  table.p_6 = 0;
  table.p_7 = 0;
  table.p_8 = 0;

  try {
    await table.save();
  } catch (err) {
    throw new GraphQLError(err.message);
  }
  table.table_id = table._id;
  return table;
};

export default resetTable;
