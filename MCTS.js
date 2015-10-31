var State = function(board, turn) {
  this.board = board;
  this.turn = turn;
};



var MCTS_Node = function(State, parent, simulate, get_children) {
  this.State = State;
  this.parent = parent;
  this.simulate = simulate;
  this.get_children = get_children;
  this.hits = 0;
  this.misses = 0;
  this.total_tries = 0;
};

MCTS_Node.prototype.child_potential = function(child) {
  var w = child.hits;
  var n = child.total_tries;
  var c = Math.sqrt(2);
  var t = this.total_tries;
  
  return w / n  +  c * Math.sqrt(Math.log(t) / n);
};

MCTS_Node.prototype.choose_child = function() {
  if (!this.children)
    this.children = get_children(State, this);
  if (this.children === 0) { // leaf node
    this.run_simulation();
  }
  else {
    var i;
    var unexplored = [];
    for (i = 0; i < this.children.length; i++)
      if (this.children[i].total_tries === 0)
        unexplored[unexplored.length] = this.children[i];

    if (unexplored.length > 0)
      unexplored[parseInt(Math.random() * unexplored.length)].run_simulation();
    else {
      var best_child, best_potential = -1, potential;
      for (i = 0; i < this.children.length; i++) {
        potential = this.child_potential(this.children[i]);
        if (potential > best_potential) {
          best_potential = potential;
          best_child = this.children[i];
        }
      }
      best_child.choose_child();
    }
  }
};

MCTS_Node.prototype.run_simulation = function() {
  this.back_propogate(this.simulate(this.State));
};

MCTS_Node.prototype.back_propogate = function(simulation) {
  if (simulation > 0)
    this.hits++;
  else if (simulation < 0)
    this.misses++;
  this.total_tries++;
  if (this.parent)
    this.parent.back_propogate(-simulation);
};
