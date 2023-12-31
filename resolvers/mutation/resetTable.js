import { GraphQLError } from 'graphql';
import Game from '../../db/models/Game.js';

import pubSub from '../utilities/pubSub.js';

const resetTable = async (root, args) => {
  const { gameId } = args;
  let game;
  try {
    game = await Game.findById(gameId).populate('table');
  } catch (err) {
    throw new GraphQLError(err.message);
  }

  const { table } = game;

  table.p_0 = 0;
  table.p_1 = 0;
  table.p_2 = 0;
  table.p_3 = 0;
  table.p_4 = 0;
  table.p_5 = 0;
  table.p_6 = 0;
  table.p_7 = 0;
  table.p_8 = 0;
  table.winner = 0;
  table.status = 1;

  try {
    await table.save();
  } catch (err) {
    throw new GraphQLError(err.message);
  }
  pubSub.publish('PLAYED', { playerPlayed: table });
  return table;
};

export default resetTable;
