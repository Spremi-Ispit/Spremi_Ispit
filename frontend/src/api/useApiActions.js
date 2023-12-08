import React, { useState } from 'react';
import * as filterActions from './filters/actions';
import * as userActions from './user/actions';
import * as postsActions from './posts/actions';
import * as commentsActions from './comments/actions';
import * as authActions from './auth/actions';

export const useApiActions = () => {
  return {
    //-------------------FILTERS----------------
    loadYearsOfStudy: useAPIAction(filterActions.loadYearsOfStudy),
    loadDepartments: useAPIAction(filterActions.loadDepartments),
    loadSubjects: useAPIAction(filterActions.loadSubjects),
    loadTypes: useAPIAction(filterActions.loadTypes),
    loadExaminationPeriods: useAPIAction(filterActions.loadExaminationPeriods),
    loadYearOfExams: useAPIAction(filterActions.loadYearOfExams),

    //-------------------USER----------------
    resetPassword: useAPIAction(userActions.resetPassword),
    resetPasswordConfirm: useAPIAction(userActions.resetPasswordConfirm),
    loadUserInfo: useAPIAction(userActions.loadUserInfo),
    updateUserRole: useAPIAction(userActions.updateUserRole),
    loadUsernamesWithRoles: useAPIAction(userActions.loadUsernamesWithRoles),
    loadUsersForUsersTable: useAPIAction(userActions.loadUsersForUsersTable),
    banUserAccount: useAPIAction(userActions.banUserAccount),
    unbanUserAccount: useAPIAction(userActions.unbanUserAccount),
    blacklistUser: useAPIAction(userActions.blacklistUser),
    changeAccountUsername: useAPIAction(userActions.changeAccountUsername),
    changeAccountPassword: useAPIAction(userActions.changeAccountPassword),

    //-------------------POST----------------
    addPostLike: useAPIAction(postsActions.addPostLike),
    addPostDislike: useAPIAction(postsActions.addPostDislike),
    removePostLike: useAPIAction(postsActions.removePostLike),
    removePostDislike: useAPIAction(postsActions.removePostDislike),
    reportPost: useAPIAction(postsActions.reportPost),
    deletePost: useAPIAction(postsActions.deletePost),
    dismissPostReport: useAPIAction(postsActions.dismissPostReport),
    loadCommentedPosts: useAPIAction(postsActions.loadCommentedPosts),
    loadReportedPosts: useAPIAction(postsActions.loadReportedPosts),
    loadUserPosts: useAPIAction(postsActions.loadUserPosts),
    loadPostsForHomepageFilters: useAPIAction(
      postsActions.loadPostsForHomepageFilters
    ),
    loadPost: useAPIAction(postsActions.loadPost),
    createPost: useAPIAction(postsActions.createPost),

    //-------------------COMMENT----------------
    addCommentLike: useAPIAction(commentsActions.addCommentLike),
    addCommentDislike: useAPIAction(commentsActions.addCommentDislike),
    removeCommentLike: useAPIAction(commentsActions.removeCommentLike),
    removeCommentDislike: useAPIAction(commentsActions.removeCommentDislike),
    reportComment: useAPIAction(commentsActions.reportComment),
    deleteComment: useAPIAction(commentsActions.deleteComment),
    dismissCommentReport: useAPIAction(commentsActions.dismissCommentReport),
    loadReportedComments: useAPIAction(commentsActions.loadReportedComments),
    loadComments: useAPIAction(commentsActions.loadComments),
    addComment: useAPIAction(commentsActions.addComment),

    //-------------------AUTH----------------
    login: useAPIAction(authActions.login),
    register: useAPIAction(authActions.register),
    registrationConfirm: useAPIAction(authActions.registrationConfirm),
  };
};

//--------------------HELPER-----------------

export const useAPIAction = (apiCall) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const action = async (...params) => {
    try {
      setLoading(true);
      setLoaded(false);
      setResponse(await apiCall(...params));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setLoaded(true);
    }
  };

  return {
    response,
    setResponse,
    error,
    setError,
    loading,
    setLoading,
    loaded,
    setLoaded,
    action,
  };
};
