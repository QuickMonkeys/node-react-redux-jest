import React from 'react';

export default (props) =>   <div>
                                <input 
                                    type='text' 
                                    placeholder="Search for ..."
                                    className="form-control"
                                    onChange={(e) => props.actions.filter(e.target.value)} />
                            </div>