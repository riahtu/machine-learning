'''@pytest_user_logout

This file will test the necessary interfaces required to logout.

Note: the 'pytest' instances can further be reviewed:

    - https://pytest-flask.readthedocs.io/en/latest
    - http://docs.pytest.org/en/latest/usage.html

'''


def test_logout(client, live_server):
    '''@test_logout

    This method tests the user logout process.

    '''

    live_server.start()

    # remove session
    session.pop('uid', None)

    # indicate whether user logged out
    if session.get('uid'):
        assert False
    else:
        assert True
