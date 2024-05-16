import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

const initialComments = [
  { name: 'John Doe', text: 'Great place! Really enjoyed my stay.', date: '2023-05-15', avatar: '/path/to/avatar1.jpg' },
  { name: 'Jane Smith', text: 'Beautiful location and very comfortable.', date: '2023-05-12', avatar: '/path/to/avatar2.jpg' },
  { name: 'Alice Johnson', text: 'Had a wonderful time with my family.', date: '2023-05-10', avatar: '/path/to/avatar3.jpg' },
];

const Comments = () => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        name: 'New User',
        text: newComment,
        date: new Date().toISOString().split('T')[0],
        avatar: '/path/to/default-avatar.jpg',
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField
          label="Add a comment"
          fullWidth
          multiline
          rows={4}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          variant="outlined"
        />
        <Box sx={{ mt: 2, textAlign: 'right' }}>
          <Button variant="contained" color="primary" onClick={handleAddComment}>
            Add Comment
          </Button>
        </Box>
      </Paper>
      <List>
        {comments.map((comment, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={comment.name} src={comment.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={comment.name}
              secondary={
                <>
                  <Typography variant="body2" color="textPrimary">
                    {comment.text}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {comment.date}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Comments;
